package com.cgi.aa.ectprest.dto;

import com.cgi.aa.ectprest.model.PersonModel;
import lombok.Data;

@Data
public class PersonDTO
{
    private int id;
    private String firstName;
    private String lastName;

    public PersonModel toModel()
    {
        return PersonModel.of(getFirstName(), getLastName());
    }
    public PersonModel toModel(final int pId)
    {
        return PersonModel.of(getFirstName(), getLastName());
    }

    public static PersonDTO of(final PersonModel pModel)
    {
        final PersonDTO dto = new PersonDTO();
        dto.setId(pModel.getId());
        dto.setFirstName(pModel.getFirstName());
        dto.setLastName(pModel.getLastName());
     return dto;
    }
}
