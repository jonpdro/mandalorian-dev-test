package org.acme.redis.view;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.acme.redis.controller.TaskService;
import org.acme.redis.model.Task;

import io.smallrye.mutiny.Uni;

@Path("/api")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TaskResource {

	@Inject
	TaskService service;

	@GET
	public Uni<List<String>> keys() {
		return service.keys();
	}

	@GET
	@Path("/task/{key}")
	public Task get(@PathParam("key") String key) {
		return new Task(key, String.valueOf(service.get(key)));
	}

	@POST
	@Path("/add/task")
	public Task create(Task tarefa) {
		service.set(tarefa.key, tarefa.value);
		return tarefa;
	}

	@DELETE
	@Path("/task/{key}")
	public Uni<Void> delete(@PathParam("key") String key) {
		return service.del(key);
	}
}
