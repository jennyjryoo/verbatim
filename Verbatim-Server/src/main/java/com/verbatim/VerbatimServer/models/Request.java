package com.verbatim.VerbatimServer.models;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class Request {

    @Id
    @GeneratedValue
    private int id;

    private LocalDate date;

    private String location;

    private String email;

    private String language;

    private String translationType;

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getTranslationType() {
        return translationType;
    }

    public void setTranslationType(String translationType) {
        this.translationType = translationType;
    }
}
