package com.cgi.aa.ectprest.model;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class PersonModel
{
    private static int idCounter;


    private int id;
    private String firstName;
    private String lastName;

   public PersonModel toModel()
   {
       return PersonModel.of(getFirstName(), getLastName());
   }
    public static PersonModel of(final String pFirstName, final String plastName)
    {
        final PersonModel person = new PersonModel();
        person.setId(++idCounter);
        person.setFirstName(pFirstName);
        person.setLastName(plastName);

        return person;
    }

}
