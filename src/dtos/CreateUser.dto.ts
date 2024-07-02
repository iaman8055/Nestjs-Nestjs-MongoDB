import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
export class CreateUserSettingsDto {
  @IsOptional()
  @IsBoolean()
  receiveNotifications?: boolean;
  @IsOptional()
  @IsBoolean()
  receiveEmails?: boolean;
  @IsOptional()
  @IsBoolean()
  receiveSms?: boolean;
}
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsString()
  @IsOptional()
  displayName?: string;
  @IsOptional()
  @ValidateNested()
  settings?: CreateUserSettingsDto;
}
