package com.spring;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("StudentCom")
public class StudentController {
	
    @RequestMapping("studLogin")
	public String studentLogin(Model model) {
    	
    	model.addAttribute("student", new Student());
		return "loginPage";
	}
	
    
    
        @RequestMapping("studConf")
    	public String studentConfirm(Model model) {
        	
    		return "confirmPage";
    	}
	
}
