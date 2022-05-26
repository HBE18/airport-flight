// flight-controller 
export interface FlightList {
    flights ?: Array<Flight>;
}

export interface Flight {
    lastUpdatedAt ?: string;
    actualLandingTime ?: string;
    actualOffBlockTime ?: string;
    aircraftRegistration ?: string;
    aircraftType ?: AircraftTypeType;
    baggageClaim ?: BaggageClaimType;
    checkinAllocations  ?: CheckinAllocationsType;
    codeshares ?: CodesharesType;
    estimatedLandingTime ?: string;
    expectedTimeBoarding ?: string;
    expectedTimeGateClosing  ?: string;
    expectedTimeGateOpen  ?: string;
    expectedTimeOnBelt  ?: string;
    expectedSecurityFilter  ?: string;
    flightDirection ?: string;
    flightName ?: string;
    flightNumber ?: number;
    gate ?: string;
    pier ?: string;
    id ?: string;
    mainFlight ?: string;
    prefixIATA ?: string;
    prefixICAO ?: string;
    airlineCode ?: number;
    publicEstimatedOffBlockTime ?: string;
    publicFlightState ?: PublicFlightStateType;
    route ?: RouteType;
    scheduleDateTime  ?: string;
    scheduleDate ?: string;
    scheduleTime ?: string;
    serviceType ?: string;
    terminal  ?: number;
    transferPositions ?: TransferPositionsType;
    schemaVersion ?: string;
}

export interface AircraftTypeType {
    iataMain ?: string;
    iataSub ?: string;
}
export interface BaggageClaimType {
    belts ?: Array<string>;
}

export interface CheckinAllocationsType {
    checkinAllocations ?: Array<CheckinAllocationsType>;
    remarks ?: RemarksType;
}

export interface CodesharesType{
    codeshares ?: Array<string>;
}

export interface PublicFlightStateType{
    flightStates ?: Array<string>;
}
export interface RouteType{
    destinations ?: Array<string>;
    eu ?: string;
    visa ?: boolean;
}

export interface TransferPositionsType{
    transferPositions ?: Array<number>;
}

export interface RemarksType{
    remarks ?: Array<string>;
}
export interface CheckinAllocationType {
    endTime ?:string;
    rows ?: RowsType;
    startTime ?: string;
}

export interface RowsType{
    rows ?: Array<RowType>;
}

export interface RowType {
    position ?: string;
    desks ?: DesksType;
}

export interface DesksType{
    desks ?: Array<DeskType>;
}

export interface DeskType{
    checkinClass ?: CheckinClassType;
    position ?: number;
}

export interface CheckinClassType{
    code ?: string;
    description ?: string;
}

// aircraft-type-controller
export interface AircraftTypeList {
    aircraftTypes ?: Array<AircraftType>;
}

export interface AircraftType {
    iataMain ?: string;
    iataSub ?: string;
    longDescription ?: string;
    shortDescription ?: string;
}

// airline-controller
export interface AirlineList {
    airlines ?: Array<Airline>
}

export interface Airline {
    iata ?: string;
    icao ?: string;
    nvls ?: number;
    publicName ?: string;
}

// destination-controller 
export interface DestinationList {
    destinations ?: Array<Destination>;
}

export interface Destination {
    city ?: string;
    country ?: string;
    iata ?: string;
    publicName ?: PublicName;
}

export interface PublicName {
    dutch ?: string;
    english ?: string;
}
