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

import org.acme.controller.TaskController;
import org.acme.model.TaskTO;

import io.smallrye.mutiny.Uni;

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskResource {
	
	@Inject
	TaskController controller;
	
	@GET
	public Uni<List<String>> getAll() {
		return controller.getAllKeys();
	}
	
	@GET
	@Path("/task/{key}")
	public TaskTO getByKey(@PathParam("key") String key) {
		return new TaskTO(key, String.valueOf(controller.getKey(key)));
	}

	@POST
	@Path("/add/task")
	public TaskTO post(@Valid TaskTO tarefa) {
		controller.insertTO(tarefa.key, tarefa.value);
		return tarefa;
	}

	@DELETE
	@Path("/task/{key}")
	public Uni<Void> delete(@PathParam("key") String key) {
		return controller.deleteTO(key);
	}

}
