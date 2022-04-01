package com.cgi.aa.ectprest;

import com.cgi.aa.ectprest.dto.PersonDTO;
import com.cgi.aa.ectprest.model.PersonModel;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
public class Controller
{
    //move to service class
    private final Map<Integer, PersonModel> people = new HashMap<>();

    @PostMapping("/")
    public PersonDTO create(
            @RequestHeader("authorization") final String pAuthn,
            @RequestBody final PersonDTO pDTO)
    {
        final PersonModel model = pDTO.toModel();
        people.put(model.getId(), model);

        return PersonDTO.of(model);
    }

    @PutMapping("/{id}")
    public PersonDTO update(@PathVariable("id") final int pId, @RequestBody final PersonDTO pDTO)
    {
        if(!people.containsKey(pId))
            {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
                final PersonModel model = pDTO.toModel(pId);
                people.put(pId, model);

    return PersonDTO.of(model);
}

    @GetMapping("/{id}")
   public PersonDTO read(@PathVariable("id") final int pId)
    {
        if(!people.containsKey(pId))
        {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
        final PersonModel model = people.get(pId);
        return PersonDTO.of(model);
    }

    @GetMapping("/")
    public Collection<PersonDTO> getAll()
    {
        return people.values().stream()
                .map(m -> PersonDTO.of(m))
                .collect(Collectors.toList());
    }

    private void validateAuthn(final String pAuthn)
    {

    }

//    @DeleteMapping("/{name}")
//    public void delete()
//    {
//
//    }
}
