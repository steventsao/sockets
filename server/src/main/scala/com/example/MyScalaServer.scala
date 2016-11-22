package com.example

import akka.actor.ActorSystem
import spray.routing.SimpleRoutingApp

object MyScalaServer extends App with SimpleRoutingApp {
	implicit val actorSystem = ActorSystem()
	startServer(interface = "localhost", port = 7000) {
		get {
			path("more") {
				complete {
					"More!"
				}
			}
		}
		get {
			path("hello") {
				complete {
					"Hello"
				}
			}
		}
	}
}
