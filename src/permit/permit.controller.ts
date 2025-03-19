import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermitService } from './permit.service';
import { CreatePermitDto } from './dto/create-permit.dto';
import { UpdatePermitDto } from './dto/update-permit.dto';

@Controller('permit')
export class PermitController {
  constructor(private readonly permitService: PermitService) {}

  @Post()
  create(@Body() createPermitDto: CreatePermitDto) {
    return this.permitService.create(createPermitDto);
  }

  @Get()
  findAll() {
    return this.permitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permitService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePermitDto: UpdatePermitDto) {
    return this.permitService.update(+id, updatePermitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permitService.remove(+id);
  }
}
