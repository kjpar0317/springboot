package com.springboot.config;
 
import java.util.ArrayList;
import java.util.List;
 
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
 
@Component
@ConfigurationProperties(prefix="env")
public class WebConfig {
    
    //getter, setter
    private List<String> servers = new ArrayList<String>();
 
    public List<String> getServers() {
        return this.servers;
    }
 
    public void setServers(List<String> servers) {
        this.servers = servers;
    }
}