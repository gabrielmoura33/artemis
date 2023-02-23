import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AnimalCreatedPayload } from 'src/@types/IAnimal';
import { AppGateway } from 'src/app.gateway';

@Controller()
export class AnimalsController {
  constructor(private appGateway: AppGateway) {}
  @EventPattern('artemis.administrative.new-animal')
  async animalCreated(@Payload('value') payload: AnimalCreatedPayload) {
    this.appGateway.server.emit('@artemis:animal-created', payload);
  }

  @EventPattern('artemis.administrative.remove-animal')
  async animalRemoved(@Payload('value') payload: AnimalCreatedPayload) {
    this.appGateway.server.emit('@artemis:remove-animal', payload);
  }
}
