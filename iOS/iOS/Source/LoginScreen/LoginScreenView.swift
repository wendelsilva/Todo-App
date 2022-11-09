//
//  MainScreenView.swift
//  iOS
//
//  Created by Gabriela Souza Batista on 08/11/22.
//

import UIKit

class LoginScreenView: UIView {

    lazy var stackTextFields = make(UIStackView()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.axis = .vertical
        $0.spacing = 10
        $0.addArrangedSubview(email)
        $0.addArrangedSubview(password)
    }

    let email = make(UITextField()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.autocorrectionType = .no
        $0.backgroundColor = .white
        $0.borderStyle = .roundedRect
        $0.keyboardType = .emailAddress
        $0.autocapitalizationType = .none
        $0.placeholder = "E-mail"
        $0.textColor = .darkGray
    }

    let password = make(UITextField()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.autocorrectionType = .no
        $0.backgroundColor = .white
        $0.borderStyle = .roundedRect
        $0.keyboardType = .default
        $0.isSecureTextEntry = true
        $0.placeholder = "Password"
        $0.textColor = .darkGray
    }

    lazy var stack = make(UIStackView()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.axis = .vertical
        $0.spacing = 30
        $0.addArrangedSubview(self.logoImage)
        $0.addArrangedSubview(self.login)
    }

    let logoImage = make(UIImageView()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.image = UIImage(named: "logoTemporaria")
        $0.contentMode = .scaleAspectFit
    }

    let login = make(UILabel()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.font = .systemFont(ofSize: 32, weight: .bold)
        $0.textAlignment = .center
        $0.numberOfLines = 0
        $0.textColor = .black
        $0.text = "Login"
    }

    let loginSubTitle = make(UILabel()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.font = .systemFont(ofSize: 17, weight: .semibold)
        $0.textAlignment = .center
        $0.numberOfLines = 0
        $0.textColor = .black
        $0.text = "Here you can make plans to do"
    }


    override init(frame: CGRect) {
        super.init(frame: frame)
        buildLayout()
    }

    required init?(coder: NSCoder) {
        fatalError("error")
    }

}

extension LoginScreenView: ViewCoding {
    func setupView() { }

    func setupHierarchy() {
        self.addSubview(stack)
        self.addSubview(loginSubTitle)
        self.addSubview(stackTextFields)
    }

    func setupConstraints() {
        NSLayoutConstraint.activate([
            stack.centerXAnchor.constraint(equalTo: self.centerXAnchor),
            stack.centerYAnchor.constraint(equalTo: self.centerYAnchor),

            loginSubTitle.topAnchor.constraint(equalTo: stack.bottomAnchor),
            loginSubTitle.centerXAnchor.constraint(equalTo: self.centerXAnchor),
            loginSubTitle.bottomAnchor.constraint(equalTo: stackTextFields.topAnchor),

            stackTextFields.topAnchor.constraint(equalTo: loginSubTitle.bottomAnchor),
            stackTextFields.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 10),
            stackTextFields.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -10)
        ])
    }


}
