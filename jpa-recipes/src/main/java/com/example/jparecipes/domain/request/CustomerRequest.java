package com.example.jparecipes.domain.request;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.math.BigDecimal;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CustomerRequest
{
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;

}
