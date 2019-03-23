/*Renayre Forbes (B00787109) CSCI 2110 A4
 * Process Class
 * Nov 25 2018
 */


public	class	Process{	
	private	int	id;
	private	int	timeReqd;
	private	int priority;
	private	int	timeArrival;

	public Process(int id, int timeReqd, int priority, int timeArrival) {
		this.id = id; this.timeReqd=timeReqd; this.priority=priority; this.timeArrival=timeArrival; 
	}
	
	public void setId(int id) {this.id = id;}
	public void setTimeReqd(int timeReqd) {this.timeReqd=timeReqd;}
	public void setPriority(int priority) {this.priority=priority;}
	public void setTimeArrival(int timeArrival) {this.timeArrival=timeArrival;}
	
	public int getId() {return id;}
	public int getTimeReqd() {return timeReqd;}
	public int getPriority() {return priority;}
	public int getTimeArrival() {return timeArrival;}
	
	public String toString() {
		return "("+id+','+timeReqd+","+priority+","+timeArrival+")";
	}

}
	
	