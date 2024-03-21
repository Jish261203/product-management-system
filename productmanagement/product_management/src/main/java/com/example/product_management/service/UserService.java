package com.example.product_management.service;


import com.example.product_management.model.User;
import java.util.List;

public interface UserService {
    List<User> get();

    User get(String email);
    void save(User user);

    void delete(int id);
}