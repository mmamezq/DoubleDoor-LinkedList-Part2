
function addRules(){
    document.getElementById("add").innerHTML = "Thanks for checking this out!" + ".<br/>" + "The add function will prompt the user for a value that they would like to add to the list. For purposes of this simple API, user should use integer values only.";
}

function editRules(){
    document.getElementById("edit").innerHTML = "The edit function will replace a value specified by the user with another value also specified by the user. The program will prompt the user to enter the value in the list that they would like changed, and will thereafter prompt once again for the replacement value. If the number desired to be changed is not in the list, the program will alert this to the user."
}

function removeRules(){
    document.getElementById("remove").innerHTML = "The remove functions asks the user the input a value in the list that they would like removed. The function will iterate through the linked list until the value is reached, and will remove the value as specified. Should the value not exist in the list, the program will alert the user of this."
}

function printRules() {
    document.getElementById("print").innerHTML = "Lastly, my favorite function: print! This function can be used at any time to print the values in the list. This function can be used for the user to observe the changes that occur after each function is called."
}
function start() {
    class Node {
        constructor(element) {
            this.data = element;
            this.next = null
        }
    }

    class LinkedList{

        constructor() {
            this.head = null;
            this.size = 0;
        }

        add(data) {
            const newNode = new Node(data);
            if (this.head === null) {
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = newNode;
            }
        }

        removeVal(item){
            let current = this.head;
            let prev = null;
            while (current != null) {
                if (current.data === item) {
                    if (prev == null) {
                        this.head = current.next;
                    } else {
                        prev.next = current.next;
                    }
                    this.size--;
                    return current.data;
                }
                prev = current;
                current = current.next;
            }
            alert("Value selected not in list.");
            return -1;
        }

        editList(value , newVal){
            let curr = this.head;
                while(curr != null){
                    if(curr.data === value){
                        curr.data = newVal;
                        return curr.data;
                    } else {
                        curr = curr.next;
                    }
                }
                alert("Value not found in list");
        }

        printList() {
            let current = this.head;
            let str = "";
            while (current) {
                str += current.data + " ";
                current = current.next;
            }
            alert(str);
        }
    }

    var list = new LinkedList();
    var selection = prompt("Please enter number of selection from menu. Press 'q' to quit.");

    while(selection !== null && selection !== "q"){

        if(selection === "1"){
            let user_add = prompt("Please enter value to add to list.");
            list.add(user_add);
        } else if (selection === "2"){
            let index = prompt("Please enter number in list to edit.");
            let newVal = prompt("Please enter new value to replace");
            list.editList(index, newVal);
        } else if (selection === "3"){
            let remove = prompt("Please enter number to remove");
            list.removeVal(remove);
        } else {
            list.printList();
        }
        selection = prompt("Please enter number of selection from menu. Press 'q' or esc to quit.");
    }
}
