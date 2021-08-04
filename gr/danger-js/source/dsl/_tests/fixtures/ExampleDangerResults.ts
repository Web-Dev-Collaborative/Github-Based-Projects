import { DangerResults, DangerInlineResults } from "../../DangerResults"

export const singleViolationSingleFileResults: DangerResults = {
  fails: [{ message: "Fail message", file: "Test.swift", line: 10 }],
  warnings: [{ message: "Warnings message", file: "Test.swift", line: 10 }],
  messages: [{ message: "Message message", file: "Test.swift", line: 10 }],
  markdowns: [{ message: "Markdown message", file: "Test.swift", line: 10 }],
  meta: {
    runtimeHref: "http://danger.system/swift",
    runtimeName: "Swift",
  },
}

export const multipleViolationSingleFileResults: DangerResults = {
  fails: [
    { message: "Fail message1", file: "Test.swift", line: 10 },
    { message: "Fail message2", file: "Test.swift", line: 10 },
    { message: "Fail message3", file: "Test.swift", line: 10 },
  ],
  warnings: [
    { message: "Warnings message1", file: "Test.swift", line: 10 },
    { message: "Warnings message2", file: "Test.swift", line: 10 },
    { message: "Warnings message3", file: "Test.swift", line: 10 },
  ],
  messages: [
    { message: "Message message1", file: "Test.swift", line: 10 },
    { message: "Message message2", file: "Test.swift", line: 10 },
    { message: "Message message3", file: "Test.swift", line: 10 },
  ],
  markdowns: [
    { message: "Markdown message1", file: "Test.swift", line: 10 },
    { message: "Markdown message2", file: "Test.swift", line: 10 },
    { message: "Markdown message3", file: "Test.swift", line: 10 },
  ],
  meta: {
    runtimeHref: "http://danger.system/swift",
    runtimeName: "Swift",
  },
}

export const multipleViolationsMultipleFilesResults: DangerResults = {
  fails: [
    { message: "Fail message1", file: "Test.swift", line: 11 },
    { message: "Fail message2", file: "Test.swift", line: 12 },
    { message: "Fail message3", file: "Test.swift", line: 12 },
  ],
  warnings: [
    { message: "Warnings message1", file: "Test.swift", line: 12 },
    { message: "Warnings message2", file: "Test.swift", line: 11 },
    { message: "Warnings message3", file: "Test.swift", line: 11 },
  ],
  messages: [
    { message: "Message message1", file: "Test.swift", line: 11 },
    { message: "Message message2", file: "Test.swift", line: 12 },
    { message: "Message message3", file: "Test.swift", line: 11 },
  ],
  markdowns: [
    { message: "Markdown message1", file: "Test.swift", line: 11 },
    { message: "Markdown message2", file: "Test.swift", line: 11 },
    { message: "Markdown message3", file: "Test.swift", line: 12 },
  ],
  meta: {
    runtimeHref: "http://danger.system/swift",
    runtimeName: "Swift",
  },
}

export const emptyDangerResults: DangerResults = {
  fails: [],
  warnings: [],
  messages: [],
  markdowns: [],
}

export const emptyDangerInlineResults: DangerInlineResults = {
  file: "",
  line: 0,
  fails: [],
  warnings: [],
  messages: [],
  markdowns: [],
}

export const singleViolationsInlineResults: DangerInlineResults = {
  file: "Test.swift",
  line: 13,
  fails: ["Fail message"],
  warnings: ["Warning message"],
  messages: ["Message message"],
  markdowns: ["Markdown message"],
}

export const multipleViolationsInlineResults: DangerInlineResults = {
  file: "Test.swift",
  line: 13,
  fails: ["Fail message1", "Fail message2"],
  warnings: ["Warning message1", "Warning message2"],
  messages: ["Message message1", "Message message2"],
  markdowns: ["Markdown message1", "Markdown message2"],
}

export const regularAndInlineViolationsResults: DangerResults = {
  fails: [
    { message: "Fail message1", file: "Test.swift", line: 10 },
    { message: "Fail message2" },
    { message: "Fail message3" },
  ],
  warnings: [
    { message: "Warnings message1" },
    { message: "Warnings message2", file: "Test.swift", line: 10 },
    { message: "Warnings message3" },
  ],
  messages: [
    { message: "Message message1" },
    { message: "Message message2" },
    { message: "Message message3", file: "Test.swift", line: 10 },
  ],
  markdowns: [
    { message: "Markdown message1", file: "Test.swift", line: 10 },
    { message: "Markdown message2", file: "Test.swift", line: 10 },
    { message: "Markdown message3", file: "Test.swift", line: 10 },
  ],
  meta: {
    runtimeHref: "http://danger.system/swift",
    runtimeName: "Swift",
  },
}

export const unsortedInlineResults: DangerInlineResults[] = [
  {
    file: "B.swift",
    line: 4,
    fails: ["C", "A", "B"],
    warnings: ["C", "A", "B"],
    messages: ["C", "A", "B"],
    markdowns: ["C", "A", "B"],
  },
  {
    file: "A.swift",
    line: 2,
    fails: ["B", "C", "B"],
    warnings: ["C", "A", "D"],
    messages: ["C", "C", "A"],
    markdowns: ["C", "B", "B"],
  },
  {
    file: "B.swift",
    line: 1,
    fails: ["C", "A", "B"],
    warnings: ["C", "A", "B"],
    messages: ["C", "A", "B"],
    markdowns: ["C", "A", "B"],
  },
]
