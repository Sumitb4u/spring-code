package com.spring;



import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import sun.misc.Request;

@Controller
public class MainController {
	
    @RequestMapping("/")
	public String getViewDetail() {
		return "View";
	}
    
    @RequestMapping("/viewForm")
	public String getViewForm() {
    	
		return "viewFormAgain";
	}
    
    @RequestMapping("/displayForm")
	public String getdisplayForm(HttpServletRequest request,Model model) {
    	String name = request.getParameter("Name");
    	model.addAttribute("message", "Hello "+ name);
    	System.out.println("name is "+name);
		return "displayFormAgain";
	}
    
    @RequestMapping("/displayFormOne")
	public String getdisplayFormOne(@RequestParam("Name") String name,Model model) {
    	
    	model.addAttribute("message", "Hello "+ name);
    	System.out.println("name is "+name);
		return "displayFormAgain";
	}
}
