public class MarketInfo {
    private double finalX;//    超市x坐标
    private double finalY;//    超市y坐标
    private double finalDistance;//     超市到所有住宅总距离
    private int count;//    计算次数

    public int getCount() {
        return count;
    }

    public void setCount(int num) {
        count = num;
    }

    public double getFinalDistance() {
        return finalDistance;
    }

    public double getFinalX() {
        return finalX;
    }

    public double getFinalY() {
        return finalY;
    }

    public void setFinalDistance(double distanceMin) {
        finalDistance = distanceMin;
    }

    public void setFinalX(double pX) {
        finalX = pX;
    }

    public void setFinalY(double pY) {
        finalY = pY;
    }
}

