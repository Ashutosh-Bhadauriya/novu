import { ApiProperty } from '@nestjs/swagger';

export class PaginatedResponseDto<T> {
  @ApiProperty({
    description: 'The current page of the paginated response',
  })
  page: number;

  @ApiProperty({
    description: 'Does the list have more items to fetch',
  })
  hasMore: boolean;

  @ApiProperty({
    description: 'Number of items on each page',
  })
  pageSize: number;

  @ApiProperty({
    description: 'The list of items matching the query',
    isArray: true,
  })
  data: T[];
}
