package com.example.product_management.conroller;


import com.example.product_management.model.User;
import com.example.product_management.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping ("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<User> get(){
        return userService.get();
    }

    @PostMapping("/user")
    public User save(@RequestBody User userobj) {
        userService.save(userobj);
        return  userobj;
    }
    @GetMapping("/user/{email}/{password}")
    public ResponseEntity<?> getLogin(@PathVariable Map<String,String> map) {
        User userobj = userService.get(map.get("email"));

        if (userobj == null) {
            throw  new RuntimeException("User not Found By ID :"+map.get("email"));
        }
        if (userobj.getPassword().equals(map.get("password"))) {
            System.out.println("hello");
            return ResponseEntity.ok(userobj); // Login successful
        } else {
//            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Invalid email or password"); // Login failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }

    @PutMapping("/user")
    public User update(@RequestBody User userobj) {
        userService.save(userobj);
        return userobj;
    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id) {
        userService.delete(id);
        return ("User with id " + id + " has been deleted");
    }
}