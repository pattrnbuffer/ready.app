#!/usr/bin/env swift

import Foundation

@main
public struct demo {
    public private(set) var text = "Hello, World!"

    public static func main() {
        do {
            print(try demo().shell("echo `pwd`"))
        } catch {}
    }

    @discardableResult // Add to suppress warnings when you don't want/need a result
    func shell(_ command: String) throws -> String {
        let task = Process()
        let pipe = Pipe()

        task.standardOutput = pipe
        task.standardError = pipe
        task.arguments = ["-c", command]
        task.executableURL = URL(fileURLWithPath: "/bin/zsh") //<--updated
        task.standardInput = nil

        try task.run() //<--updated

        let data = pipe.fileHandleForReading.readDataToEndOfFile()
        let output = String(data: data, encoding: .utf8)!

        return output
    }
}
