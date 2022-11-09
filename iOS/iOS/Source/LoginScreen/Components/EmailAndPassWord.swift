//
//  LoginAndPassWord.swift
//  iOS
//
//  Created by Gabriela Souza Batista on 08/11/22.
//

//import UIKit
//
//class EmailAndPassWord: UIView {
//
//    lazy var stackTextFields = make(UIStackView()) {
//        $0.translatesAutoresizingMaskIntoConstraints = false
//        $0.axis = .vertical
//        $0.spacing = 10
//        $0.addArrangedSubview(email)
//        $0.addArrangedSubview(password)
//    }
//
//    let email = make(UITextField()) {
//        $0.translatesAutoresizingMaskIntoConstraints = false
//        $0.autocorrectionType = .no
//        $0.backgroundColor = .white
//        $0.borderStyle = .roundedRect
//        $0.keyboardType = .emailAddress
//        $0.autocapitalizationType = .none
//        $0.placeholder = "E-mail"
//        $0.textColor = .darkGray
//    }
//
//    let password = make(UITextField()) {
//        $0.translatesAutoresizingMaskIntoConstraints = false
//        $0.autocorrectionType = .no
//        $0.backgroundColor = .white
//        $0.borderStyle = .roundedRect
//        $0.keyboardType = .default
//        $0.isSecureTextEntry = true
//        $0.placeholder = "Password"
//        $0.textColor = .darkGray
//    }
//
//    override init(frame: CGRect) {
//        super.init(frame: frame)
//        buildLayout()
//    }
//
//    required init?(coder: NSCoder) {
//        fatalError("erro")
//    }
//
//}
//extension EmailAndPassWord: ViewCoding {
//    func setupView() { }
//
//    func setupHierarchy() {
//        self.addSubview(stackTextFields)
//    }
//
//    func setupConstraints() {
//        NSLayoutConstraint.activate([
//            stackTextFields.centerYAnchor.constraint(equalTo: self.safeAreaLayoutGuide.centerYAnchor),
//            stackTextFields.leadingAnchor.constraint(equalTo: self.leadingAnchor, constant: 10),
//            stackTextFields.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -10)
//        ])
//    }
//
//
//}
