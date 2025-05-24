import { Injectable } from '@angular/core';
import {CapacitorSQLite, SQLiteConnection, SQLiteDBConnection} from "@capacitor-community/sqlite";
import {Platform} from "@ionic/angular";
import {Capacitor} from "@capacitor/core";
import {Artist} from "../model/artist.interface";

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;
  private isWeb: boolean = false;
  private readonly STORAGE_KEY = 'favorites';
  private readonly STORAGE_DB = 'favoritesDB';

  constructor(private platform: Platform) {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    this.init();
  }

  private async init() {
    await this.platform.ready();
    this.isWeb = Capacitor.getPlatform() === 'web';

    if (!this.isWeb) {
      try {
        const db = await this.sqlite.createConnection(
          this.STORAGE_DB, false, 'no-encryption', 1, false
        );
        await db.open();
        this.db = db;
        await db.execute(`
          CREATE TABLE IF NOT EXISTS favorites (
            id TEXT PRIMARY KEY
          );
        `);
      } catch (error) {
        console.error('Error opening SQLite database', error);
      }
    }
  }

  async addFavorite(id: String) {
    if (this.db) {
      await this.db.run(`INSERT INTO favorites (id) VALUES (?)`, [id]);
    }
  }

  async deleteFavorite(id: String) {
    if (this.db) await this.db.run(`DELETE FROM favorites WHERE id = ?`, [id]);
  }

  async isFavorite(id: String) {
    if (this.db) {
      let response = await this.db.query(`SELECT * FROM favorites WHERE id = ?`, [id]);
      return response.values && response.values.length > 0;
    }
    return false;
  }

  async getFavorites(): Promise<String[]> {
    if (this.db) {
      const res = await this.db.query(`SELECT * FROM favorites`);
      return res.values ?? [];
    }
    return [];
  }
}
