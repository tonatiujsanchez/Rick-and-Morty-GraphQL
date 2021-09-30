export interface RaM {
    data: Data;
}

export interface Data {
    episodes:   Episodes;
    characters: Characters;
}

export interface Characters {
    results: CharactersResult[];
}

export interface CharactersResult {
    id:       string;
    name:     string;
    status:   Status;
    species:  Species;
    gender:   Gender;
    created: string;
    origin:   Location;
    location: Location;
    image:    string;
    isFavorite?: boolean
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

export interface Episodes {
    results: EpisodesResult[];
}

export interface EpisodesResult {
    name:    string;
    episode: string;
}
