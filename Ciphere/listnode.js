class ListNode{
    val;
    next;
    constructor(val,next=null){
        this.val=val;
        this.next=next;
    }
}
class Testclass {
    head;
    constructor(head=null){
        this.head=head;
    }
    hasLast(){
        return this.head !==null;
    }
    getlast(){
        if(!this.hasLast()){
            return null;
        }
        let curr= this.head;
        while(curr.next !==null){
            curr=curr.next;
        }
        let fvalue= curr.val;
        curr=this.head;
        while(curr.next!=null && curr.next.next !==null){
            curr=curr.next;
        }
        if (curr.next === null){
            this.head=null;
        }
        curr.next=null;
        return fvalue;
    }
}

let myvar= new Testclass(
    new ListNode(1,new ListNode(2, new ListNode(3,new ListNode(4,new ListNode(5)))))
);
console.log(myvar.getlast());
console.log(myvar.getlast());
console.log(myvar.getlast());
console.log(myvar.getlast());
console.log(myvar.getlast());
console.log(myvar.getlast());