import java.util.List;
//  计算最佳位置

public class getBestLocation {
    //  获取所有住宅到超市的距离所需数据：住宅数量，住宅信息List（住宅地址和住宅居民人数），超市位置
    private List<LocationInfo> mLocationInfoList;
    private int mHouseNum = 0;
    public double distanceMin = 0;//    先估算一个最小距离

    //  定义超市位置范围：x轴范围和y轴范围
    private double mMinLocationX = 0;
    private double mMaxLocationX = 0;
    private double mMinLocationY = 0;
    private double mMaxLocationY = 0;

    //  构造函数初始化 mHouseNum ，mLocationInfoList ，distanceMin
    public getBestLocation(int mHouseNum, List<LocationInfo> mLocationInfoList, double distanceMin) {
        this.mLocationInfoList = mLocationInfoList;
        this.mHouseNum = mHouseNum;
        this.distanceMin = distanceMin;
    }

    //  计算两点距离
    public double getDistance(double x, double y, double destinyX, double destinyY) {
        return Math.sqrt(Math.pow(destinyX - x, 2) + Math.pow(destinyY - y, 2));
    }

    //  获取超市地址的范围
    public void getRange() {
        if (mLocationInfoList != null) {
            mMinLocationX=mLocationInfoList.get(0).getLocationX();
            mMaxLocationX=mLocationInfoList.get(0).getLocationX();
            mMinLocationY=mLocationInfoList.get(0).getLocationY();
            mMaxLocationY=mLocationInfoList.get(0).getLocationY();
            for (int i = 0; i < mHouseNum; i++) {
                LocationInfo curLocal = mLocationInfoList.get(i);
                double curX = curLocal.getLocationX();//当前住宅的X坐标
                double curY = curLocal.getLocationY();//当前住宅的Y坐标

                mMaxLocationX = mMaxLocationX > curX ? mMaxLocationX : curX;//最大X坐标
                mMaxLocationY = mMaxLocationY > curY ? mMaxLocationY : curY;//最大Y坐标
                mMinLocationX = mMinLocationX < curX ? mMinLocationX : curX;//最小X坐标
                mMinLocationY = mMinLocationY < curY ? mMinLocationY : curY;//最小Y坐标
            }
        }
    }

    //  根据获取到的坐标范围，获取最佳的超市位置
    public void getMarketLocation(MarketInfo finalM) {

//        System.out.println("mList======="+mLocationInfoList.get(0));
        getRange();//获取坐标范围

        double pX = mMinLocationX;//坐标位置
        double pY = mMinLocationY;
        double distanceSum = 0;//   总距离

        int mCount=0;

        for (double x = mMinLocationX; x <= mMaxLocationX; x++) {
            for (double y = mMinLocationY; y <= mMaxLocationY; y++) {
                for (int i = 0; i < mHouseNum; i++) {// 计算所有住宅到范围内每个点的距离之和
                    LocationInfo house = mLocationInfoList.get(i);
                    double X=house.getLocationX();
                    double Y=house.getLocationY();
                    double Z=house.getLocationPerson();

                    distanceSum+=getDistance(X, Y, x, y)*Z;
                }
                if (distanceMin==0){
                    distanceMin=distanceSum;
                }
                if (distanceMin >= distanceSum) {
                    distanceMin = distanceSum;
                    pX = x;
                    pY = y;
                    //  获取总距离最小的位置信息
                    finalM.setFinalX(pX);
                    finalM.setFinalY(pY);
                    finalM.setFinalDistance(distanceMin);
                }
                mCount ++;
                distanceSum=0;
            }
        }
        finalM.setCount(mCount);
    }

}
