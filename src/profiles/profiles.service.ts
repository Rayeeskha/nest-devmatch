import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    { id: randomUUID(), name: 'John Doe', description: 'Software Engineer' },
    { id: randomUUID(), name: 'Jane Smith', description: 'Product Manager' },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return matchingProfile;
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updateProfileDto: Partial<CreateProfileDto>) {
    const matchingProfile = this.profiles.find((profile) => profile.id === id);
    if (!matchingProfile) {
      return {};
    }
    matchingProfile.name = updateProfileDto.name ?? matchingProfile.name;
    matchingProfile.description =
      updateProfileDto.description ?? matchingProfile.description;
    return matchingProfile;
  }

  remove(id: string) {
    const matchingProfileIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );
    if (matchingProfileIndex === -1) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
    return this.profiles.splice(matchingProfileIndex, 1)[0];
  }
}
