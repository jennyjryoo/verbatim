package com.verbatim.VerbatimServer.data;

import com.verbatim.VerbatimServer.models.Request;
import org.springframework.data.repository.CrudRepository;

public interface RequestRepository extends CrudRepository<Request, Integer> {

}
