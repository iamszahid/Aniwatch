import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { addData } from '../state/actions/data.actions';


describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[provideMockStore({})]
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update data and dispatch an action', () => {
    const apiUrl = `https://api.jikan.moe/v4/anime`;

    const mockApiResponse = {
      Response:'False'
    };
    // Subscribe to the store's dispatch method so we can spy on it.
    spyOn(store, 'dispatch').and.callThrough();

    // Call the updateData method.
    service.getAnimeData();

    // Expect an HTTP request to the specified API URL.
    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');

    // Respond with the mock API data.
    req.flush(mockApiResponse);

    // Expect that the store's dispatch method was called with the correct action.
    expect(store.dispatch).toHaveBeenCalledWith(addData({ data: mockApiResponse }));
  });


});