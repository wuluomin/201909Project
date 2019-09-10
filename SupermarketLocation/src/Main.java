import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    private static Scanner scanner = new Scanner(System.in);
    private static final int HOUSE_NUM = 8;//  住户数

    //    (10,20,30) , (30,34,45) , (19,25,28) , (38,49.1,8) , (9,38.1,36) , (2,34,16) , (5,8,78) , (29,48,56)
    //  获取全部住宅信息
    private static List<LocationInfo> getLocationInfoList() {
        List<LocationInfo> list = new ArrayList<>();//  存放住宅信息的数组

        //  读取住宅数据
        for (int i = 0; i < HOUSE_NUM; i++) {
            LocationInfo oneHouseInfo = new LocationInfo();
            System.out.println("Please input House No." + (i+1) +" LocationInfo");
            System.out.println("LocationX is:");
            double locationX = scanner.nextDouble();
            System.out.println("LocationY is:");
            double locationY = scanner.nextDouble();
            System.out.println("LocationPerson:");
            int locationPerson = scanner.nextInt();

            //  设置住宅数据
            oneHouseInfo.setLocationX(locationX);
            oneHouseInfo.setLocationY(locationY);
            oneHouseInfo.setLocationPerson(locationPerson);
            //  追加到list中
            list.add(oneHouseInfo);
            System.out.println(list.size());
        }
        return list;
    }

    public static void main(String[] args) {
        //  实例化对象
        MarketInfo marketInfo = new MarketInfo();
        LocationInfo locationInfo = new LocationInfo();
        List<LocationInfo> mList = getLocationInfoList();
        double distanceMin = 40000;//估算最小距离

//        System.out.println("mList:---------" + mList);
        for (int i = 0; i < 8; i++) {// 计算所有住宅到范围内每个点的距离之和
            LocationInfo house = mList.get(i);
//            System.out.println(house.getLocationX());
        }

        getBestLocation bestLocation = new getBestLocation(HOUSE_NUM, mList, distanceMin);
        bestLocation.getMarketLocation(marketInfo);//   获取最佳超市位置
//        scanner.close();
        System.out.println("最佳的便利店位置到所有住宅的距离之和为：" + marketInfo.getFinalDistance() +
                "这个位置的X坐标为：" + marketInfo.getFinalX() +
                "这个位置的Y坐标为：" + marketInfo.getFinalY()+
                "计算次数："+marketInfo.getCount());
    }
}
