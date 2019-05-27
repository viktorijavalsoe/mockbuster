import { TestBed } from '@angular/core/testing';
import { MockdataService } from './mockdata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MockdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ MockdataService],
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: MockdataService = TestBed.get(MockdataService);
    expect(service).toBeTruthy();
  });
});
