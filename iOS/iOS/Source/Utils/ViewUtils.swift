//
//  ViewUtils.swift
//  iOS
//
//  Created by Gabriela Souza Batista on 18/10/22.
//

import UIKit

func make<T: UIView>(_ uiView: T, _ configure: (T) -> Void) -> T {
    configure(uiView)
    return uiView
}
