package com.example.demo.config;

import jakarta.servlet.Filter;
import org.springframework.beans.factory.BeanNameAware;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public interface qw extends Filter, BeanNameAware {
    void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException;
}
