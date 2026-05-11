"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export const onBoardUser = async () => {
    try {
        const user = await currentUser();
        if (!user) 
            return { success: false, error: "No user found" };
        
        const { id, firstname, lastname, imageurl, emailAddresses } = user;
        
        const newUser = await db.user.upsert({
            where: {
                clerkId: id
            },
            update: {
                firstName: firstname || null,
                lastName: lastname || null,
                imageUrl: imageurl || null,
                email: emailAddresses[0].emailAddress || "",
            },
            create: {
                clerkId: id,
                email: emailAddresses[0].emailAddress || "",
                firstName: firstname || null,
                lastName: lastname || null,
                imageUrl: imageurl || null,
            },
        });

        return {
            success: true,
            user: newUser,
            message: "User onboarded successfully"
        }
        
    } catch (error) {
        return {
            success: false,
            user: null,
            error: error.message || "Something went wrong"
        }
    }
}

export const currentUserRole = async ()=>{
  try {
    const user = await currentUser();

      if (!user) {
            return { success: false, error: "No authenticated user found" };
        }

        const {id} = user;

        const userRole = await db.user.findUnique({
          where:{
            clerkId:id
          },
          select:{
            role:true
          }
        })
    return userRole ? userRole.role : null;
  } catch (error) {
     console.error("❌ Error fetching user role:", error);
        return { success: false, error: "Failed to fetch user role" };
  }
}

export const getCurrentUser = async()=>{
  const user = await currentUser();
  if (!user) return null;

  const dbUser = await db.user.findUnique({
    where:{
      clerkId:user.id
    },
    select:{
      id:true
    }
  })


  return dbUser;
}