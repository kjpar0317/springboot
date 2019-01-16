package com.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {

	@GetMapping("/")
	public String index(Model model) {
        System.out.println("index=======================>");
		model.addAttribute("test", "Server liveReload Test");
		return "index";
    }
}

/*
@RestController
public class TestController {
    
    @Autowired
    TestConfig testConfig;
    
    @RequestMapping("/")
    public String test() {
        return testConfig.getServers().get(0) + " / " + testConfig.getServers().get(1); 
    }
}
*/