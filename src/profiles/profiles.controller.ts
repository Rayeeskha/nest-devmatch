import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { updateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  @Get()
  findAll() {
    return this.profilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.findOne(id);
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    // Logic to create a new profile
    return this.profilesService.create(createProfileDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateProfileDto: updateProfileDto,
  ) {
    // Logic to update an existing profile
    return this.profilesService.update(id, updateProfileDto);
  }

  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    // Logic to remove a profile
    return this.profilesService.remove(id);
  }
}
