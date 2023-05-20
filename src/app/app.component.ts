import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsCart: any[] = [];
  action_figure: any;
  ships: any;
  products: any;
  datos_cargados = false;
  mostrarCarrito = false;
  selectedCurrency: string = 'us'; // Moneda seleccionada (por defecto es 'us')

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    const figuresPromise = this.getFigures();
    const shipsPromise = this.getShips();

    const [figures, ships] = await Promise.all([figuresPromise, shipsPromise]);

    this.products = [...figures, ...ships];
    this.datos_cargados = true;
  }

  async getFigures() {
    const result = await this.http.get('https://swapi.dev/api/people')
      .pipe(
        map((result: any) => {
          return result.results.slice(0, 3).map((person: any) => {
            return {
              name: person.name,
              movies: person.films,
              category: "Action Figure",
              price : 150,
              usdPrice: 150
            };
          });
        }),
        take(1)
      ).toPromise();

    this.action_figure = await result;
    await this.replaceMoviesWithTitles(this.action_figure);
    return this.action_figure;
  }

  async getShips() {
    const result = await this.http.get('https://swapi.dev/api/starships')
      .pipe(
        map((result: any) => {
          return result.results.slice(0, 3).map((ship: any) => {
            return {
              name: ship.name,
              movies: ship.films,
              category: "Ships",
              price : 400,
              usdPrice: 400
            };
          });
        }),
        take(1)
      ).toPromise();

    this.ships = await result;
    await this.replaceMoviesWithTitles(this.ships);
    return this.ships;
  }

  async replaceMoviesWithTitles(products: any) {
    const promises = products.map((product: any) => {
      const promises = product.movies.map((movie: any) => {
        return this.http.get(movie).pipe(
          map((movien: any) => movien.title)
        ).toPromise();
      });

      return Promise.all(promises).then((titles) => {
        product.movies = titles;
      });
    });

    await Promise.all(promises);
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    
    this.products.forEach((product: any) => {
      switch (currency) {
        case 'us':
          product.price = product.usdPrice; // Precio en dólares (valor original)
          break;
        case 'eu':
          product.price = product.usdPrice* 0.9; // Precio en euros (valor original multiplicado por 0.9)
          break;
        case 'ar':
          product.price = product.usdPrice* 470; // Precio en pesos argentinos (valor original multiplicado por 470)
          break;
        default:
          break;
      }
    });
  }
  volver() {
    this.mostrarCarrito = false;
  }
}