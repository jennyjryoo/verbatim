package com.verbatim.VerbatimServer.controllers;

import com.verbatim.VerbatimServer.data.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestController {

    @Autowired
    private RequestRepository requestRepository;


}
