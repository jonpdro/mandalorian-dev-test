package org.acme.web.resource;

import java.util.List;

import javax.inject.Inject;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.acme.model.TaskTO;
import org.acme.service.TaskService;

import io.smallrye.mutiny.Uni;

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskResource {
	
	@Inject
	TaskService service;
	
	@GET
	public Uni<List<String>> getAll() {
		return service.getAllKeys();
	}
	
	@GET
	@Path("/task/{key}")
	public TaskTO getByKey(@PathParam("key") String key) {
		return new TaskTO(key, String.valueOf(service.getKey(key)));
	}

	@POST
	@Path("/add/task")
	public TaskTO post(@Valid TaskTO tarefa) {
		service.insertTO(tarefa.key, tarefa.value);
		return tarefa;
	}

	@DELETE
	@Path("/task/{key}")
	public Uni<Void> delete(@PathParam("key") String key) {
		return service.deleteTO(key);
	}

}
