//
//  LoginScreenController.swift
//  iOS
//
//  Created by Gabriela Souza Batista on 08/11/22.
//

import UIKit

class LoginScreenController: UIViewController {
    var loginScreenView = LoginScreenView()
//    var emailAndPassword = EmailAndPassWord()

    override func loadView() {
//        backgroundColor = UIColor(named: "backgroundColor")
        view = loginScreenView
//        view = emailAndPassword
    }


    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(named: "backgroundColor")

    }
}
