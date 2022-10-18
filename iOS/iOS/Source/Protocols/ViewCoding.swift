//
//  ViewCoding.swift
//  iOS
//
//  Created by Gabriela Souza Batista on 18/10/22.
//

import Foundation

protocol ViewCoding: AnyObject {
    func setupView()
    func setupHierarchy()
    func setupConstraints()
}

extension ViewCoding {
    func buildLayout() {
        setupView()
        setupHierarchy()
        setupConstraints()
    }
}
