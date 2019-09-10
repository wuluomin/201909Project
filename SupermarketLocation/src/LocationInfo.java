//住宅类，横坐标locationX，纵坐标locationY，住户人数locationPerson
public class LocationInfo {
    private double locationX;
    private double locationY;
    private int locationPerson;

    public double getLocationX() {
        return locationX;
    }

    public double getLocationY() {
        return locationY;
    }

    public int getLocationPerson() {
        return locationPerson;
    }

    public void setLocationPerson(int locationPerson) {
        this.locationPerson = locationPerson;
    }

    public void setLocationX(double locationX) {
        this.locationX = locationX;
    }

    public void setLocationY(double locationY) {
        this.locationY = locationY;
    }
}
