# This file is part of the GBI project.
# Copyright (C) 2012 Omniscale GmbH & Co. KG <http://omniscale.com>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import sqlalchemy as sa

from sqlalchemy import orm
from geobox.lib.coverage import coverage_from_geojson
from .meta import Base

__all__ = ["ExternalWMTSSource", "LocalWMTSSource"]


class ExternalWMTSSource(Base):
    __tablename__ = "external_wmts_sources"

    id = sa.Column(sa.Integer, primary_key=True)
    url = sa.Column(sa.String(256), nullable=False)
    username = sa.Column(sa.String(64))
    password = sa.Column(sa.String(64))
    name = sa.Column(sa.String, nullable=False)
    title = sa.Column(sa.String)
    layer = sa.Column(sa.String(256), nullable=False)
    format = sa.Column(sa.String, nullable=False)
    srs = sa.Column(sa.String(64), default="EPSG:3857")
    matrix_set = sa.Column(sa.String(64), default="GoogleMapsCompatible")
    download_coverage = sa.Column(sa.String())
    download_level_start = sa.Column(sa.Integer())
    download_level_end = sa.Column(sa.Integer())

    view_coverage = sa.Column(sa.String())
    view_level_start = sa.Column(sa.Integer)
    view_level_end = sa.Column(sa.Integer)

    is_baselayer = sa.Column(sa.Boolean(), default=False)
    is_overlay = sa.Column(sa.Boolean(), default=True)
    background_layer = sa.Column(sa.Boolean(), default=False)
    active = sa.Column(sa.Boolean(), default=True)

    def bbox_from_view_coverage(self):
        coverage = coverage_from_geojson(self.view_coverage)
        bbox = coverage.bbox
        return bbox


class LocalWMTSSource(Base):
    __tablename__ = "local_wmts_sources"

    id = sa.Column(sa.Integer, primary_key=True)
    wmts_source_id = sa.Column(
        sa.Integer, sa.ForeignKey("external_wmts_sources.id"), nullable=False
    )
    wmts_source = orm.relationship("ExternalWMTSSource", backref="local_wmts_sources")
    download_level_start = sa.Column(sa.Integer())
    download_level_end = sa.Column(sa.Integer())

    timestamp = sa.Column(sa.DateTime())

    @property
    def zoom_level(self):
        return range(self.download_level_start, self.download_level_end + 1)
