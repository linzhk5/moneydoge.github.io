package backend1.demo;

import java.util.Date;

public class expressage{

    private String express_loc;
    private int num;
    private String loc;
    private int pid;
    private String remark;
    private int pay;
    private Date issue_time;
    private Date arrive_time;
    private int state;

    public void setState(int state) {
        this.state = state;
    }

    public int getState() {
        return state;
    }

    public void setIssue_time(Date issue_time) {
        this.issue_time = issue_time;
    }



    public void setRemark(String remark) {
        this.remark = remark;
    }



    public void setPay(int pay) {
        this.pay = pay;
    }

    public void setArrive_time(Date arrive_time) {
        this.arrive_time = arrive_time;
    }

    public void setExpress_loc(String express_loc) {
        this.express_loc = express_loc;
    }

    public void setLoc(String loc) {
        this.loc = loc;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getPay() {
        return pay;
    }

    public Date getArrive_time() {
        return arrive_time;
    }

    public int getNum() {
        return num;
    }

    public int getPid() {
        return pid;
    }

    public String getExpress_loc() {
        return express_loc;
    }

    public String getLoc() {
        return loc;
    }

    public Date getIssue_time() {
        return issue_time;
    }


    public String getRemark() {
        return remark;
    }

}
