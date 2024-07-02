/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Response,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './User.service';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from 'src/dtos/UpdateUser.dto';

@Controller('Users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post()
  @UsePipes(new ValidationPipe())
  CreateUserDto(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.createUser(createUserDto);
  }
  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException(' User is not found', 404);
    const user = await this.usersService.getUserById(id);
    if (!user) throw new HttpException('User is not Found with this id ', 404);
    return user;
  }
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async UpdateUserDto(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid id', 400);
    const updateUser = await this.usersService.updateUser(id, updateUserDto);
    if (!updateUser) throw new HttpException('User not Found', 404);
    return updateUser; 
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException(' User is not found', 404);
    const user = await this.usersService.deleteUser(id);
    if (!user) throw new HttpException('User is not Found with this id ', 404);
    return;
  }
}
