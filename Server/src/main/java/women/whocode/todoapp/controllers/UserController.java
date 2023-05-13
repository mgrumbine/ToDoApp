package women.whocode.todoapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import women.whocode.todoapp.models.User;
import women.whocode.todoapp.models.data.UserRepository;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("register")
    void registerUser(@RequestBody User user) {
        User newUser = new User(user.getUsername(), user.getPassword());
        userRepository.save(newUser);
    }

}
