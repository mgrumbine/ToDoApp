package women.whocode.todoapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import women.whocode.todoapp.models.User;
import women.whocode.todoapp.models.data.UserRepository;

@RestController
@RequestMapping("")
@CrossOrigin
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("register")
    public String registerUser(@RequestBody User user) {
        User newUser = new User(user.getUsername(), user.getPassword(), user.getEmail(), user.getPhoneNumber());
        userRepository.save(newUser);
        return "New User is added";
    }

}
