package com.example.jparecipes.domain.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.math.BigDecimal;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CustomerResponse
{
    private Long id;
    private String name;
    private String description;
    private BigDecimal price;

}
