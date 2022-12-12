//
//  MainScreenView.swift
//  iOS
//
//  Created by Gabriela Souza Batista on 18/10/22.
//

import UIKit

class MainScreenView: UIView {
    
    lazy var stack = make(UIStackView()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.axis = .vertical
        $0.spacing = 20
        $0.addArrangedSubview(self.logo)
        $0.addArrangedSubview(self.title)
    }
    
    let logo = make(UIImageView()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.image = UIImage(systemName: "arrow.down.heart")
        $0.contentMode = .scaleAspectFit
    }
    
    let title = make(UILabel()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
        $0.font = .systemFont(ofSize: 17, weight: .bold)
        $0.textAlignment = .left
        $0.numberOfLines = 0
        $0.textColor = .black
    }
    
    // MARK: - make the stackviews for user and password input
    
    let user = make(UIStackView()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
    }
    
    let password = make(UIStackView()) {
        $0.translatesAutoresizingMaskIntoConstraints = false
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        buildLayout()
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}
extension MainScreenView: ViewCoding {
    func setupView() {
    }
    
    func setupHierarchy() {
        self.addSubview(stack)
    }
    
    func setupConstraints() {
        NSLayoutConstraint.activate([
            stack.centerYAnchor.constraint(equalTo: self.centerYAnchor),
            stack.centerXAnchor.constraint(equalTo: self.centerXAnchor)
        ])
    }
    
    
}
