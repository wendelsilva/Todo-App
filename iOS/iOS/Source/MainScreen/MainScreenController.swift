//
//  ViewController.swift
//  iOS
//
//  Created by Gabriela Souza Batista on 06/09/22.
//

import UIKit

class MainScreenController: UIViewController {
    
    let mainScreenView = MainScreenView()
    var mainScreenModel = MainScreenModel() {
        didSet {
            mainScreenView.title.text = mainScreenModel.labelLogo.description
        }
    }
    override func loadView() {
        view = mainScreenView
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white
        mainScreenView.title.text = mainScreenModel.labelLogo.description
    }

}

